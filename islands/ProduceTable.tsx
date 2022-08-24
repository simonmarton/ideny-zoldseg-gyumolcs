/** @jsx h */
import { h } from 'preact';
import { useState, useMemo, useReducer } from 'preact/hooks';
import { tw } from '@twind';

import { produce } from '../data/byProduce.ts';
import { closestMonth } from '../utils/date.ts';

const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
const colorKeys = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

const getColorFromString = (input: string): string => {
  const idx = [...input].reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const color = colorKeys[idx % colorKeys.length];
  return `bg-${color}-400`;
};

export default () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const closeMonth = closestMonth(now);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [nameFilter, setNameFilter] = useState('');
  const [currentFilter, toggleCurrentFilter] = useReducer((value) => !value, false);

  const filteredProduce = useMemo(
    () =>
      produce.filter(({ name, category, availableMonths }) => {
        if (nameFilter && !name.includes(nameFilter.toLowerCase())) {
          return false;
        }
        if (selectedCategory !== 'all' && category !== selectedCategory) {
          return false;
        }
        if (currentFilter && !(availableMonths[currentMonth] || availableMonths[closeMonth])) {
          return false;
        }
        return true;
      }),
    [nameFilter, selectedCategory, currentFilter]
  );

  const firstMonth = Math.min(currentMonth, closeMonth);
  const filteredMonthNames = monthNames.slice(firstMonth, firstMonth + 2);

  return (
    <div className={tw`flex flex-col gap-1`}>
      <nav className={tw`flex flex-col md:flex-row content-between gap-2`}>
        <input
          type="text"
          placeholder="szures"
          onInput={({ target }) => setNameFilter((target as HTMLInputElement).value)}
          value={nameFilter}
        />
        <select
          onChange={({ target }) => setSelectedCategory((target as HTMLSelectElement).value)}
          value={selectedCategory}
        >
          {selectedCategory !== 'all' ? (
            <option value="all">Osszes</option>
          ) : (
            <option disabled selected value="all">
              Kategoria szures
            </option>
          )}
          <option value="vegetable">Zoldseg</option>
          <option value="fruit">Gyumolcs</option>
          <option value="herb">Fuszernoveny</option>
        </select>

        <label>
          mostanaban <input type="checkbox" onChange={toggleCurrentFilter} checked={currentFilter} />
        </label>
      </nav>

      <table className={tw`border-collapse`} style={{ borderSpacing: '0 10px' }}>
        <thead>
          <tr className={tw`sticky top-0`}>
            <th></th>
            {(currentFilter ? filteredMonthNames : monthNames).map((name) => (
              <th className={tw`w-12`}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredProduce.map(({ name, availableMonths }) => (
            <tr className={tw`py-2 hover:bg-blue-200`}>
              <td className={tw`py-0 pr-2 text-right`}>{name}</td>
              {availableMonths.map((isAvailable, idx) => {
                if (currentFilter && !(idx === currentMonth || idx === closeMonth)) {
                  return null;
                }

                const starting = idx === 0 || !availableMonths[idx - 1];
                const ending = idx === 11 || !availableMonths[idx + 1];

                return (
                  <td
                    className={tw`px-0 py-2 border-gray-400 border-x-1 ${idx === 0 && 'border-l-0'} ${
                      idx === 11 && 'border-r-0'
                    }`}
                  >
                    <div
                      className={tw('w-full flex border-0', {
                        [getColorFromString(name)]: !!isAvailable,
                        'rounded-l-2xl': starting,
                        'rounded-r-2xl': ending,
                      })}
                    >
                      &nbsp;
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

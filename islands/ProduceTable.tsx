/** @jsx h */
import { h } from 'preact';
import { useState, useMemo, useReducer } from 'preact/hooks';
import { tw } from '@twind';

import { produce } from '../data/byProduce.ts';
import { closestMonth } from '../utils/date.ts';

const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

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

      <table className={tw`border-collapse `}>
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
            <tr className={tw`py-4 hover:bg-blue-200`}>
              <td className={tw`py-2 text-right`}>{name}</td>
              {availableMonths.map((isAvailable, idx) => {
                if (currentFilter && !(idx === currentMonth || idx === closeMonth)) {
                  return null;
                }
                return (
                  <td className={tw`my-2 text-center border-blue-300 ${idx === currentMonth && 'border-x-2'}`}>
                    {!!isAvailable && '✅'}
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

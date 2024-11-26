// import React from "react";

const Hiragana = ({ setC }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 flex flex-row justify-center">
        <h1 className="mb-2 text-lg font-semibold md:text-xl">
          Hiragana chart
        </h1>
        <label className="ml-5 flex cursor-pointer flex-col items-center">
          <span className="mb-1 text-xs font-medium text-gray-400 dark:text-gray-300">
            Katakana
          </span>
          <div>
            <input
              type="checkbox"
              value="0"
              onClick={() => {
                setC(1);
              }}
              className="peer sr-only"
            />
            <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-lime-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-lime-800 rtl:peer-checked:after:-translate-x-full" />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-x-0 gap-y-1">
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            あ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            a
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            い
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            i
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            う
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            u
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            え
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            e
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            お
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            o
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            か
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ka
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            き
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ki
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            く
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ku
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            け
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ke
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            こ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ko
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            さ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            sa
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            し
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none underline max-lg:text-xs">
            shi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            す
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            su
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            せ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            se
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            そ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            so
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            た
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ta
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ち
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none underline max-lg:text-xs">
            chi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            つ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none underline max-lg:text-xs">
            tsu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            て
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            te
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            と
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            to
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            な
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            na
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            に
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ni
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ぬ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            nu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ね
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ne
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            の
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            no
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            は
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ha
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ひ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            hi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ふ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            fu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            へ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            he
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ほ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ho
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ま
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ma
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            み
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            mi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            む
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            mu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            め
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            me
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            も
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            mo
          </span>
        </button>
        <div className="col-span-5 grid grid-cols-subgrid justify-items-center">
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              や
            </span>
            <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
              ya
            </span>
          </button>
          <button
            type="button"
            className="col-start-3 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ゆ
            </span>
            <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
              yu
            </span>
          </button>
          <button
            type="button"
            className="col-start-5 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              よ
            </span>
            <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
              yo
            </span>
          </button>
        </div>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ら
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ra
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            り
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ri
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            る
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ru
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            れ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            re
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ろ
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
            ro
          </span>
        </button>
        <div className="col-span-5 grid grid-cols-subgrid justify-items-center">
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              わ
            </span>
            <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
              wa
            </span>
          </button>
          <button
            type="button"
            className="col-start-5 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              を
            </span>
            <span className="max-lg:t-1 text-sm font-normal leading-none max-lg:text-xs">
              wo
            </span>
          </button>
        </div>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ん
          </span>
          <span className="max-lg:t-1 text-sm font-normal leading-none underline max-lg:text-xs">
            n/m
          </span>
        </button>
      </div>
    </div>
  );
};

const Katakana = ({ setC }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 flex flex-row justify-center">
        <h1 className="mb-2 text-lg font-semibold md:text-xl">
          Katakana chart
        </h1>
        <label className="ml-5 flex cursor-pointer flex-col items-center">
          <span className="mb-1 text-xs font-medium text-gray-400 dark:text-gray-300">
            Hiragana
          </span>
          <div>
            <input
              type="checkbox"
              value="1"
              onClick={() => {
                setC(0);
              }}
              className="peer sr-only"
              defaultChecked
            />
            <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-lime-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-lime-800 rtl:peer-checked:after:-translate-x-full" />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-x-0 gap-y-1">
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ア
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            a
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            イ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            i
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ウ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            u
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            エ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            e
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            オ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            o
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            カ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ka
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            キ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ki
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ク
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ku
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ケ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ke
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            コ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ko
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            サ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            sa
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            シ
          </span>
          <span className="text-sm font-normal leading-none underline max-lg:text-xs">
            shi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ス
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            su
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            セ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            se
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ソ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            so
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            タ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ta
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            チ
          </span>
          <span className="text-sm font-normal leading-none underline max-lg:text-xs">
            chi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ツ
          </span>
          <span className="text-sm font-normal leading-none underline max-lg:text-xs">
            tsu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            テ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            te
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ト
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            to
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ナ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            na
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ニ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ni
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ヌ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            nu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ネ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ne
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ノ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            no
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ハ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ha
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ヒ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            hi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            フ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            fu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ヘ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            he
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ホ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ho
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            マ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ma
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ミ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            mi
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ム
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            mu
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            メ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            me
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            モ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            mo
          </span>
        </button>
        <div className="col-span-5 grid grid-cols-subgrid justify-items-center">
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ヤ
            </span>
            <span className="text-sm font-normal leading-none max-lg:text-xs">
              ya
            </span>
          </button>
          <button
            type="button"
            className="col-start-3 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ユ
            </span>
            <span className="text-sm font-normal leading-none max-lg:text-xs">
              yu
            </span>
          </button>
          <button
            type="button"
            className="col-start-5 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ヨ
            </span>
            <span className="text-sm font-normal leading-none max-lg:text-xs">
              yo
            </span>
          </button>
        </div>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ラ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ra
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            リ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ri
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ル
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ru
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            レ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            re
          </span>
        </button>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ロ
          </span>
          <span className="text-sm font-normal leading-none max-lg:text-xs">
            ro
          </span>
        </button>
        <div className="col-span-5 grid grid-cols-subgrid justify-items-center">
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ワ
            </span>
            <span className="text-sm font-normal leading-none max-lg:text-xs">
              wa
            </span>
          </button>
          <button
            type="button"
            className="col-start-5 flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
          >
            <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
              ヲ
            </span>
            <span className="text-sm font-normal leading-none max-lg:text-xs">
              wo
            </span>
          </button>
        </div>
        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center rounded-lg border border-lime-700 p-1 text-center text-sm font-medium text-lime-700 hover:bg-lime-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-lime-300 dark:border-lime-500 dark:text-lime-500 dark:hover:bg-lime-500 dark:hover:text-white dark:focus:ring-lime-800"
        >
          <span className="text-lg font-bold leading-none max-lg:text-base max-lg:leading-none">
            ン
          </span>
          <span className="text-sm font-normal leading-none underline max-lg:text-xs">
            n/m
          </span>
        </button>
      </div>
    </div>
  );
};

export { Hiragana, Katakana };

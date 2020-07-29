
import  { useState, useEffect } from 'react';

interface ILocalStoragetSet {
  <T>(key: string, value: T): {
    success: boolean,
    resultMsg?: string,
    value: T
  }
}

interface ILocalStoragetGet {
  <T>(key: string,defaultValue:T): {
    success: boolean,
    resultMsg?: string,
    value: T
  }
}

export const useSetToLocalStorage: ILocalStoragetSet = function (key, value) {
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    try {
      const valueToStore = (typeof value) !== 'string' ? JSON.stringify(value) : String(value);
      window.localStorage.setItem(key, valueToStore);
      setIsSaved(true)
    }
    catch (error) {
      setIsSaved(false);
    }
  }, [key, value]);
  return {
    success: isSaved,
    resultMsg: "",
    value: value
  }
}

export const useGetFromLocalStorage: ILocalStoragetGet = function (key,defaultValue) {
  const [readValue, setReadValue] = useState(defaultValue);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    try {
      let readValueFromStorage = window.localStorage.getItem(key);
      setReadValue(
        (readValueFromStorage) ?
          JSON.parse(readValueFromStorage) : defaultValue
      );
      setIsRead(true);
    }
    catch (error) {
      setIsRead(false);
    }
  }, [key,defaultValue]);
  return {
    success: isRead,
    resultMsg: "",
    value: readValue
  }
}
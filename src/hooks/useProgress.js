import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'acp-reading-progress';

export default function useProgress() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = useCallback((id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const isChecked = useCallback((id) => !!checked[id], [checked]);

  // For a parent item: checked if all sub-items are checked
  const isParentChecked = useCallback((subItems) => {
    if (!subItems || subItems.length === 0) return false;
    return subItems.every(s => !!checked[s.id]);
  }, [checked]);

  // Progress for a list: { done, total }
  const getListProgress = useCallback((items) => {
    let done = 0;
    let total = 0;
    for (const item of items) {
      if (item.subItems && item.subItems.length > 0) {
        total += item.subItems.length;
        done += item.subItems.filter(s => !!checked[s.id]).length;
      } else {
        // Film or single item — use the item id itself
        total += 1;
        if (checked[item.id]) done += 1;
      }
    }
    return { done, total };
  }, [checked]);

  return { toggle, isChecked, isParentChecked, getListProgress };
}

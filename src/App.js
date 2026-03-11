import React, { useState } from 'react';
import readingLists from './data/readingLists';
import useProgress from './hooks/useProgress';
import ReadingItem from './components/ReadingItem';
import ProgressBar from './components/ProgressBar';
import './App.css';

// Group items by module if they have one
function groupByModule(items) {
  const groups = [];
  let currentModule = null;
  let currentItems = [];

  for (const item of items) {
    const mod = item.module || null;
    if (mod !== currentModule) {
      if (currentItems.length > 0) {
        groups.push({ module: currentModule, items: currentItems });
      }
      currentModule = mod;
      currentItems = [item];
    } else {
      currentItems.push(item);
    }
  }
  if (currentItems.length > 0) {
    groups.push({ module: currentModule, items: currentItems });
  }
  return groups;
}

function App() {
  const [activeList, setActiveList] = useState('list-1');
  const { toggle, isChecked, isParentChecked, getListProgress } = useProgress();

  const currentList = readingLists.find(l => l.id === activeList);
  const progress = currentList ? getListProgress(currentList.items) : { done: 0, total: 0 };

  const texts = currentList ? currentList.items.filter(i => i.type === 'text') : [];
  const films = currentList ? currentList.items.filter(i => i.type === 'film') : [];

  const hasModules = texts.some(t => t.module);
  const textGroups = hasModules ? groupByModule(texts) : [{ module: null, items: texts }];

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-logo">☭</div>
        <h1>ACP Education</h1>
        <p className="header-sub">Reading Progress Tracker</p>
      </header>

      <nav className="list-tabs">
        {readingLists.map(list => (
          <button
            key={list.id}
            className={`tab ${activeList === list.id ? 'active' : ''}`}
            onClick={() => setActiveList(list.id)}
          >
            {list.title}
          </button>
        ))}
      </nav>

      {currentList && (
        <main className="list-content">
          {currentList.description && (
            <p className="list-description">{currentList.description}</p>
          )}
          <ProgressBar done={progress.done} total={progress.total} />

          {textGroups.map((group, i) => (
            <section key={i}>
              <h2 className="section-title">
                {group.module ? `${group.module} Module` : 'Texts'}
              </h2>
              {group.items.map(item => (
                <ReadingItem
                  key={item.id}
                  item={item}
                  toggle={toggle}
                  isChecked={isChecked}
                  isParentChecked={isParentChecked}
                />
              ))}
            </section>
          ))}

          {films.length > 0 && (
            <section>
              <h2 className="section-title">Films & Documentaries</h2>
              {films.map(item => (
                <ReadingItem
                  key={item.id}
                  item={item}
                  toggle={toggle}
                  isChecked={isChecked}
                  isParentChecked={isParentChecked}
                />
              ))}
            </section>
          )}
        </main>
      )}
    </div>
  );
}

export default App;

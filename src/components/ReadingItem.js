import React, { useState } from 'react';
import './ReadingItem.css';

export default function ReadingItem({ item, toggle, isChecked, isParentChecked }) {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const parentDone = hasSubItems ? isParentChecked(item.subItems) : isChecked(item.id);
  const isFilm = item.type === 'film';

  const completedSubs = hasSubItems
    ? item.subItems.filter(s => isChecked(s.id)).length
    : 0;

  return (
    <div className={`reading-item ${parentDone ? 'done' : ''}`}>
      <div className="reading-item-header" onClick={() => hasSubItems ? setExpanded(!expanded) : toggle(item.id)}>
        <div className="reading-item-check">
          {isFilm && !hasSubItems ? (
            <input
              type="checkbox"
              checked={isChecked(item.id)}
              onChange={() => toggle(item.id)}
              onClick={e => e.stopPropagation()}
            />
          ) : (
            <span className={`parent-check ${parentDone ? 'checked' : ''}`}>
              {parentDone ? '✓' : ''}
            </span>
          )}
        </div>
        <div className="reading-item-info">
          <span className={`item-type-badge ${isFilm ? 'film' : 'text'}`}>
            {isFilm ? '🎬' : '📖'}
          </span>
          <div className="item-text">
            <span className="item-title">{item.title}</span>
            {item.author && <span className="item-author">{item.author}</span>}
            {item.year && <span className="item-year">({item.year})</span>}
            {item.note && <span className="item-note">{item.note}</span>}
          </div>
        </div>
        {hasSubItems && (
          <div className="reading-item-meta">
            <span className="sub-count">{completedSubs}/{item.subItems.length}</span>
            <span className={`expand-arrow ${expanded ? 'open' : ''}`}>›</span>
          </div>
        )}
      </div>

      {expanded && hasSubItems && (
        <div className="sub-items">
          {item.subItems.map(sub => (
            <label key={sub.id} className={`sub-item ${isChecked(sub.id) ? 'done' : ''}`}>
              <input
                type="checkbox"
                checked={isChecked(sub.id)}
                onChange={() => toggle(sub.id)}
              />
              <span>{sub.title}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

import * as React from 'react';
import './TabSelector.css';
// tslint:disable: jsx-no-lambda

export interface Item {
  name: string;
  icon: string;
  checked: boolean;
}

export interface Props {
  items: Item[];
  onClick: (index: number) => void;
}

export const TabSelector = (props: Props) => (
  <main>
    {props.items.map((item: Item, index: number) => (
      <span key={index} onClick={() => props.onClick(index)}>
        <input type="radio" name="tabs" checked={item.checked} onChange={() => {}} />
        <label style={{ width: '50%' }}>
          <i className={`mr-2 ${item.icon}`} /> <span className="	d-none d-md-block">{item.name}</span>
        </label>
      </span>
    ))}
  </main>
);

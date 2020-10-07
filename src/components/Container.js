import React from 'react';
import TodoList from './TodoList';

const Container = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <a
            className={
              'text-xs text-center font-bold uppercase px-5 py-3 rounded block ' +
              (openTab === 1 ? 'text-white bg-blue-500' : 'text-blue-500 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Todo List
          </a>
        </li>
        <li className="flex-1 mr-2">
          <a
            className={
              'text-xs text-center font-bold uppercase px-5 py-3 rounded block ' +
              (openTab === 2 ? 'text-white bg-blue-500' : 'text-blue-500 bg-white')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Map
          </a>
        </li>
      </ul>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                 <TodoList/>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;

import React from 'react';
import TodoList from './TodoList';
import Map from './Map';

const Container = () => {
  const [openTab, setOpenTab] = React.useState(2);
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
                  <TodoList />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div style={{ height: '400px', width: '100%' }}>
                    <Map center={{ lat: 6.1942598, lng: -75.6035291 }} zoom={16} />
                    {/* <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`}
                    containerElement={<div style={{ height: '400px' }}></div>}
                    mapElement={<div style={{ height: '100%' }}></div>}
                    loadingElement={<p>Loading...</p>}
                  /> */}
                  </div>
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

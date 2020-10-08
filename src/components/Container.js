import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import TodoList from './TodoList';
import Map from './Map';

// Icons
import paper from '../assests/icons/paper.svg';
import map from '../assests/icons/map.svg';

const Container = ({ todos, currentLocation }) => {
  const [openTab, setOpenTab] = useState(1);
  const [location, setLocation] = useState([]);

  const getLocations = () => {
    setLocation(
      todos.map((element) => {
        return {
          location: element.location,
          text: element.text,
        };
      })
    );
  };

  useEffect(() => {
    getLocations();
  }, [todos]);

  return (
    <>
      <ul className="flex mx-4">
        <li className="flex-1 mr-2">
          <a
            className={
              'text-xs text-center font-bold uppercase px-5 py-3 rounded block ' +
              (openTab === 1 ? 'text-white bg-blue-900' : 'text-blue-500 bg-blue-200')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            <img className="inline-flex mr-2 mb-2" src={paper} alt="paper" />
            Todo List
          </a>
        </li>
        <li className="flex-1 mr-2">
          <a
            className={
              'text-xs text-center font-bold uppercase px-5 py-3 rounded block ' +
              (openTab === 2 ? 'text-white bg-blue-900' : 'text-blue-500 bg-blue-200')
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            <img className="inline-flex mr-2 mb-2" src={map} alt="map" />
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
                  <TodoList todos={todos} />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div style={{ height: '400px', width: '100%' }}>
                    <Map center={{ lat: currentLocation.lat, lng: currentLocation.lng }} locations={location} zoom={6} />
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

const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer,
    currentLocation: state.locationReducer,
  };
};

export default connect(mapStateToProps, null)(Container);

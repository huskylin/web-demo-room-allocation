import React, { useState } from 'react';
import Room from '../Room/Room';

import './RoomAllocation.css';

function RoomAllocation({ guest = 1, room = 1, onChange = () => {} }) {
  const roomType = 4;
  const roomItems = Array.from({ length: room }, (_, i) => {
    return { id: i, adult: 1, child: 0 };
  });
  const [remain, setRemain] = useState(guest);
  const [roomData, setRoomdata] = useState(roomItems);

  const handleInputChange = (e) => {
    const id = e.id;
    const updatedRoomData = [...roomData];
    updatedRoomData[id] = e;
    const total = updatedRoomData.reduce(
      (pre, e) => pre + e.adult + e.child,
      0
    );
    setRoomdata(updatedRoomData);
    setRemain(guest - total);
    onChange(roomData);
  };

  const renderRooms = ({ id }) => {
    return (
      <div key={id}>
        <Room
          id={id}
          max={roomType}
          disabled={remain === 0}
          onChange={handleInputChange}
        ></Room>
        {id !== room - 1 && <hr></hr>}
      </div>
    );
  };

  return (
    <>
      <div className="room-allocation-container">
        <div>
          <h2>
            住客人數：{guest} 人 / {room} 房
          </h2>
          {guest > room * roomType && (
            <div className="room-allocation-hint">
              入住人數超過房間容納人數，請重新確認
            </div>
          )}
          {guest < room && (
            <div className="room-allocation-hint">
              入住人數不足房間數量，請重新確認
            </div>
          )}
          {guest <= room * roomType && guest >= room && (
            <div className="room-allocation-hint">
              尚未分配人數：{remain} 人
            </div>
          )}
        </div>
        {guest <= room * roomType && guest >= room && (
          <div>{roomItems.map((e) => renderRooms(e))}</div>
        )}
      </div>
    </>
  );
}

export default RoomAllocation;

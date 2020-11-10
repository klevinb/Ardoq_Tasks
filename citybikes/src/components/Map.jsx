import { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Modal } from 'react-bootstrap';
import { ImLocation } from 'react-icons/im';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { MdDirectionsBike } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';

const MapContainer = (props) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  return (
    <>
      <Map
        google={props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: '59.9139', lng: '10.7522' }}
      >
        {props.stations &&
          props.stations.map((station, key) => (
            <Marker
              key={key}
              onClick={() => {
                setSelected(station);
                setShow(true);
              }}
              position={{ lat: station.lat, lng: station.lon }}
            />
          ))}
      </Map>
      {selected && (
        <Modal size='lg' show={show} onHide={() => setShow(false)}>
          <Modal.Title className='d-flex justify-content-center'>
            Station Information
          </Modal.Title>
          <Modal.Body className='d-flex justify-content-between'>
            {console.log(
              selected,
              props.stationsInfo.find(
                (station) => station.station_id === selected.station_id
              )
            )}
            <div>
              <div>
                <strong>Name </strong>
                {selected.name}
              </div>
              <div>
                <ImLocation /> {selected.address}
              </div>
              <div>
                <AiOutlineFieldNumber /> of <MdDirectionsBike />{' '}
                {selected.capacity}
              </div>
            </div>
            <div>
              <div className='d-flex justify-content-between'>
                <strong>Bikes Information</strong>
              </div>
              <div>
                <strong>Last Report</strong>
                {' : '}
                {new Date(
                  props.stationsInfo.find(
                    (station) => station.station_id === selected.station_id
                  ).last_reported * 1000
                )
                  .toString()
                  .substring(0, 25)}
              </div>
              <div>
                <MdDirectionsBike /> available{' : '}
                {
                  props.stationsInfo.find(
                    (station) => station.station_id === selected.station_id
                  ).num_bikes_available
                }
              </div>

              <div>
                <AiOutlineFieldNumber /> of docks available {' : '}
                {
                  props.stationsInfo.find(
                    (station) => station.station_id === selected.station_id
                  ).num_docks_available
                }
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

// props.stations.find(
//   (station) => station.station_id === selected.station_id
// )
export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);

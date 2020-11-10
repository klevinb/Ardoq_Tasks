import { useEffect, useState } from 'react';
import { Row, Col, Modal, Spinner } from 'react-bootstrap';
import Map from './components/Map';
import './App.css';

function App() {
  const [stations, setStations] = useState(null);
  const [stationsInfo, setStaionsInfo] = useState(null);
  const [lodaing, setLodaing] = useState(true);

  const fetchStationsInformation = async () => {
    const response = await fetch(
      'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json'
    );

    if (response.ok) {
      const responseData = await response.json();
      setStations(responseData.data.stations);
    }
  };
  const fetchStationStatus = async () => {
    const response = await fetch(
      'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json'
    );

    if (response.ok) {
      const responseData = await response.json();
      setStaionsInfo(responseData.data.stations);
      setLodaing(false);
    }
  };

  useEffect(() => {
    fetchStationsInformation();
    fetchStationStatus();
  }, []);

  return (
    <div className='App'>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className='appInfo'>
            <h2>City Bikes</h2>
            <p>
              Here you will find information about the stations, bikes around
              the Oslo city. Real time data provided by{' '}
              <string>
                <a
                  href='https://oslobysykkel.no/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Oslo City Bike
                </a>
              </string>
            </p>
          </div>
        </Col>
        <Col>
          {!lodaing ? (
            <Map stations={stations} stationsInfo={stationsInfo} />
          ) : (
            <Spinner animation='grow' variant='light' />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, } from '@react-google-maps/api';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';

const containerStyle = {
  width: "1000px",
  height: '600px',
};

function Getlocation(props) {
  const center = {
    lat: 31.76542,
    lng: 74.46436,

  };

  const [lat, setLat] = useState(center.lat)
  const [lng, setLng] = useState(center.lng)
  const [address, setAddress] = useState(null)




  const [map, setMap] = useState(null)
  const apiKey = "AIzaSyBzam4xfC-Tf0QteyfVTuVrnSZHEzRZ6Io"

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const drag = (event) => {
    setLat(event.latLng.lat())
    setLng(event.latLng.lng())

    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      lat +
      ',' +
      lng +
      '&key=' +
      apiKey,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'OK') {
          setAddress(responseJson?.results?.[0]?.formatted_address);
        }
      })
      .catch(error => {
        console.log(error)
      });

  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude,position.coords.longitude)
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)

      })
    }, 3000)

  }, [])


  // window.onclick = (e) => {
  //   var back1 = document.getElementById('closemapp');
  //   if (e.target == back1) {
  //     props.closeMap(false)
  //     // document.getElementById('closemapp').style.display="none"
  //   }
  //   else {
  //     // props.closeModal(true)
  //   }
  // }

  return isLoaded ? (

    <div id='closemapp' onClick={(e) => {
      var back1 = document.getElementById('closemapp');
      if (e.target == back1) {
        props.closeMap(false)
      }


    }} style={{

      backgroundColor: "rgb(69 74 84 / 65%)",
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      // cursor:"pointer",
      border: "2px solid black"

    }}>



      <GoogleMap

        mapContainerStyle={containerStyle}
        center={{ lat: lat, lng: lng }}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        <div onClick={() => {
          props.closeMap(false)
          window.sendaddress= address
          window.latitude = lat
          window.longitude = lng
        }}
          style={{
            position: "absolute", width: "200px", height: "auto", textAlign: "center",
            backgroundColor: "white", left: "45%", top: "10px", borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            cursor: "pointer",
          }}>
          <p style={{ fontSize: "16px", padding: "10px" }}>{address}

          </p>
        </div>
        <Marker
          draggable={true}
          position={{ lat: lat, lng: lng }}
          onDragEnd={drag}

        />


      </GoogleMap>
    </div>
  ) : <>
  </>

}

export default React.memo(Getlocation)





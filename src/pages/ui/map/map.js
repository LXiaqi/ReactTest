import React from 'react'
import { Card } from 'antd';
import Crumbs from './../../../components/crumbs/crumbs';
import { Map, Markers } from 'react-amap';
import './map.less'
const randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
      position: {
        longitude: 100 + Math.random() * 30,
        latitude: 30 + Math.random() * 20,
      },
      draggable: true,
      someProperty: parseInt(Math.random() * 100),
    }))
  );
class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.markers = randomMarker(10);
        this.mapCenter = { longitude: 120, latitude: 30 };
        this.state = {

        }
    };
    componentDidMount() {

    };
    randomAngle(extData, index){
        if (extData.someProperty % 3 === 0){
          return 45;
        }
        return 0;
      }
    render() {
        return (
            <div>
                <Crumbs />
                <Card className="mapcard">
                    <div style={{ width: 1400, height: 600, margin: 'auto' }}>
                        <Map zoom={4} center={this.mapCenter} scale={2} >
                            <Markers
                                markers={this.markers}
                                bubble={false}
                                angle={(extData, index) => { return this.randomAngle(extData, index) }}
                                useCluster={false}
                            />
                        </Map>
                    </div>
                </Card>
            </div>
        )
    }
}
export default Maps;
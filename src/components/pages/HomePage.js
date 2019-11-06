import React, { Component } from "react";
import ActorList from "../ActorList";

export default class HomePage extends Component {
  state = {
    actors: [
      {
        name: "Mehmet Erdoğdu",
        description: "Çok deli yazılımcı",
        photo:
          "https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-1/p160x160/58384174_1160189197497438_7541004471946444800_n.jpg?_nc_cat=111&_nc_oc=AQl_Q1bQCjwnmYNFmeYiearKm18HOjEsypl5i_Gi0NzjxLSrOEcQO2idmGVnQFRvgGk&_nc_ht=scontent-frt3-2.xx&oh=f63acce2f3ea6158264e97ca08880627&oe=5E2F7327"
      }
    ]
  };
  render() {
    return (
      <div>
        <ActorList actors={this.state.actors} />
      </div>
    );
  }
}

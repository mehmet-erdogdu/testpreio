import React from "react";
import { Grid, Card } from "semantic-ui-react";
import PropTypes from "prop-types";

const ActorList = props => {
  return (
    <div>
      <Grid stackable columns={4}>
        {props.actors.map(actor => (
          <Grid.Column key={actor.name}>
            <Card
              image={actor.photo}
              header={actor.name}
              extra={actor.description}
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

ActorList.propTypes = { actors: PropTypes.array.isRequired };
ActorList.defaultProps = {};

export default ActorList;

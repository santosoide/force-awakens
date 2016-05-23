import React, { PropTypes } from 'react'
import Infinite from 'react-infinite'

const PeopleCard = ({peoples, loader, hooks}) => (
    <Infinite elementHeight={112}
              preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
              preloadAdditionalHeight={Infinite.containerHeightScaleFactor(2)}
              onInfiniteLoad={loader}
              infiniteLoadBeginEdgeOffset={112}
              useWindowAsScrollContainer>
        {peoples.results.map((people, id) => {
                return (
                    <Card
                        key={id}
                        character={people}
                    />
                )
            }
        )}
    </Infinite>
);

PeopleCard.propTypes = {
    peoples: PropTypes.array.isRequired,
    loader: PropTypes.func.isRequired
};

export default PeopleCard
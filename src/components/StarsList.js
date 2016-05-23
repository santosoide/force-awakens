import React, { PropTypes } from 'react'
import Infinite from 'react-infinite'
import StarCard from '../components/StarCard'

const StarsList = ({stars, loader, hooks}) => (
    <Infinite elementHeight={210}
              preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
              preloadAdditionalHeight={Infinite.containerHeightScaleFactor(2)}
              onInfiniteLoad={loader}
              infiniteLoadBeginEdgeOffset={210}
              useWindowAsScrollContainer>
        {stars.map((star, id) => {
                return (
                    <StarCard
                        key={id}
                        star={star}
                    />
                )
            }
        )}
    </Infinite>
);

StarsList.propTypes = {
    stars: PropTypes.array.isRequired,
    loader: PropTypes.func.isRequired,
    hooks: PropTypes.func.isRequired
};

export default StarsList

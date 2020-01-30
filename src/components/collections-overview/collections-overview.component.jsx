import React from "react";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import {selectCollectionsForOverview} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => (
  <div className='collecions-overview'>
    {collections.map(({id, ...otherPreviewProps}) => (
      <div key={id}>
        <CollectionPreview {...otherPreviewProps} />{" "}
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionOverview);
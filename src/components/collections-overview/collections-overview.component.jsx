import React from "react"
import "./collections-overview.styles.scss"
import { connect } from "react-redux"
import { selectCollectionsForPreview } from "../redux/shop/shop.selector"
import { createStructuredSelector } from "reselect"
import CollectionPreview from "../collections/collections-preview.component"

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
    {
        collections.map(({id ,...otherCollectionProps}) => (
            <div>
                <CollectionPreview id = {id} {...otherCollectionProps}></CollectionPreview>
            </div>
                )

        )
    }
    </div>
)
const mapStateToProps = createStructuredSelector(
    {
        collections : selectCollectionsForPreview
    }
)
export default connect( mapStateToProps )(CollectionOverview)
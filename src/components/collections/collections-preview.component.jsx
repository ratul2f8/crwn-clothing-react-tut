import React from  "react"
import "./collections-preview.component.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
const CollectionPreview = ({title,items}) => (
    <div>
        <div className="collection-preview">
<h1 className="title"> {title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item,count) => count < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item = {item}>
                        </CollectionItem>
                    ))
                }
            </div>
        </div>
    </div>
)
export default CollectionPreview;
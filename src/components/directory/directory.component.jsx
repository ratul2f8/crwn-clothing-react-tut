import React from "react"
import MenuItem from "../menu-item/menu-item.component"
import './directory.styles.scss'
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { selectDirectorySection } from "../redux/directory/directory.selector"
const Directory = ({ sections }) => (
              <div className="directory-menu">
                {
                    sections.map(
                    ({id,...otherSextionProps}) => (
                        <MenuItem key={id} {...otherSextionProps}/>
                    )
                  )                  
                }
            </div>
)
const mapStateToProps = createStructuredSelector(
  {
     sections : selectDirectorySection
  }
)
export default connect( mapStateToProps)(Directory)

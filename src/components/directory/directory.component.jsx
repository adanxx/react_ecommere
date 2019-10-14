import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectDirectorSection} from '../../redux/directory/directory.selector';

import './directory.styles.scss';

const Directory = ({sections}) => {
  
    return(
        <div className='directory-menu'>
            { sections.map( ({id, ...sectionProps}) =>(
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    )
    
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorSection
});


export default connect(mapStateToProps)(Directory);
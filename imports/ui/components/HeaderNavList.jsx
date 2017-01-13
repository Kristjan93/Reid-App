import React from 'react';
import Radium from 'radium'

import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import HeaderNavListItem from './HeaderNavListItem.jsx';


const styles = {
  base: {
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      listStyle: 'none',
      margin: '0',
      padding: '0',
    },
  },
};


class HeaderNavList extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul style={styles.base.ul}>
          <HeaderNavListItem  
            to="/" 
            title="Tours"
            dropdown={ [{to: 'short-tours', text:'Short tours'},{to: 'long-tours', text:'Long tours'} ] } />
        </ul>
      </nav>
    );
  }
}

export default Radium(HeaderNavList);


// <li>
//             <a href="#">
//               <div>
//                 Tours
//                     <FontIcon
//                   style={styles.base.dropDownMenuIco}
//                   className="fa fa-caret-down" />
//                 <span>come ride with us</span>
//               </div>
//             </a>
//             <div>
//               <ul>
//                 <li><Link to="short-tours">Short tours</Link></li>
//                 <li><Link to="long-tours">Long tours</Link></li>
//               </ul>
//             </div>
//           </li>

//           <li>
//             <a href="/contact">
//               <div>
//                 Contact
//                   <span>drop me a line</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/forum">
//               <div>
//                 Forum
//                   <span>chat with others</span>
//               </div>
//             </a>
//           </li>
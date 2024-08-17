import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';

const SideDrawer = (props) => {

    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venueinfo', value: 'Venue INFO'},
        {where: 'highlights', value: 'Highlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location', value: 'Location'}
        
    ]

    const renderItem = (item) => 
         (

        <ListItem button onClick={() => alert(item.where)} key={item.where}>

            {item.value}
        </ListItem>
        )
    

    return(

        <Drawer
        
            anchor={"right"}
            open={props.open}
            onClose={()=> props.onClose(false)}
           
        >

            <List component="nav">

                {links.map((item)=> renderItem(item))}
            </List>

            <List component="nav">
                <ListItem button onClick={()=> alert ('click')}>

                    Name of Item
                </ListItem>
                
                </List>

       
        
        </Drawer>
    )


}

export default SideDrawer;
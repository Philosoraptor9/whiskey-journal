import NavLayout from '../components/NavLayout.js'
import {withRouter} from 'next/router'
import Link from 'next/link'
import NavBar from '../components/navbar.js'

export default () => (
    <div>
        <NavLayout>
            <p>this is the navbar for the how whiskey is made page</p>
        </NavLayout>
            <p> 
                <strong>(1)</strong> crushing grains (barley, corn, rye, wheat, etc.) to 
                create the grist, 
            <br/>
                <strong>(2)</strong> adding water to create the mash 
            <br/>
                <strong>(3)</strong> boiling this mixture and then allowing it to cool, 
            <br/>
                <strong>(4)</strong> adding yeast, which carries out fermentation by 
                eating the sugars to create alcohol, 
            <br/>
                <strong>(5)</strong> draining the resulting liquid, which is now beer, 
                and then distilling using a still and 
            <br/>
                <strong>(6)</strong> aging the resulting liquor in wooden barrels.
            </p>
    </div>
)
import {  NavContainer} from "./styles";
import Link from 'next/link';
import {Italics} from '../Font/styles'
import { theme } from "../../config/theme";
import {generateID} from "../../lib/generateID";

export default function Nav({navItems}) {

    return (

        <NavContainer>
            {
                navItems.map(nav => (
                <Link href={nav.href} key={generateID(15)}>
                    <Italics
                        color={["grey", "0", theme]}
                        size="font14"
                        lineHeight="lineHeight16"
                        weight="fontWeightNormal"
                        fontFamily="sagoe"
                    >
                        {nav.name}
                    </Italics>
                </Link>
                ))
            }
        </NavContainer>
    );
}

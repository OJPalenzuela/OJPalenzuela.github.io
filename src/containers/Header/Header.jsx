import React from "react";
import { Anchor, HeaderMenu, List, UList } from "./Header.style";

const Header = () => (
	<HeaderMenu>
		<UList>
			<List>
				<Anchor href="#welcome-section">Inicio</Anchor>
			</List>
			<List>
				<Anchor href="#projects">Proyectos</Anchor>
			</List>
			<List>
				<Anchor href="#section-contact">Contacto</Anchor>
			</List>
		</UList>
	</HeaderMenu>
);

export default Header;

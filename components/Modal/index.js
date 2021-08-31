/*
 * component: modal
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 */

import React from "react";
import {
  Container,
  Main,
  ModalWrap,
  HeaderWrap,
  Header,
  Title,
  Body,
  Overlay,
  Content,
  OverFlow,
  CloseIconWrap,
} from "./styles";
import PropTypes from "prop-types";
import { CloseIcon } from "../../public/svg";
import { theme } from "../../config/theme";

const Modal = ({ show, handleClose, title, noHeader, children }) => {
  let buttonRef = React.createRef();

  return (
    <Container
      show={show} // handles the calling and removal of the modal
      ref={buttonRef}
    >
      <Main
        show={show} // handles the calling and removal of the modal
      >
        <Overlay onClick={() => handleClose()} />

        <ModalWrap>
          <Body>
            <HeaderWrap noHeader={noHeader}>
              <Header>
                {noHeader ? null : <Title>{title.toUpperCase()}</Title>}
              </Header>

              <CloseIconWrap onClick={() => handleClose()}>
                <CloseIcon
                  width="15px"
                  height="15px"
                  color={["grey", "0", theme]}
                />
              </CloseIconWrap>
            </HeaderWrap>

            <OverFlow>
              <Content>{children}</Content>
            </OverFlow>
          </Body>
        </ModalWrap>
      </Main>
    </Container>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  noHeader: PropTypes.bool,
  title: PropTypes.string,
};

export default Modal;

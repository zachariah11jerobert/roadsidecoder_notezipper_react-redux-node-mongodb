import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          {title && (
            <>
              <div classNAme="heading">{title}</div>
              <hr />
            </>
          )}
          {children}
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;

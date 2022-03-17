import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Piyush Agarwal">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
        <Card>
          <Card.Header style={{ display: "flex" }}>
            <span>title</span>

            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;

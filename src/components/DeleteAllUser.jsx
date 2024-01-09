import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteAllsers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;

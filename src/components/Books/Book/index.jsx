import PropTypes from "prop-types";

const Book = ({
  book: { title = "", author = "", yearCreate = 0, pages = 0 },
}) => {
  return (
    <article>
      <hr />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>
        year: {yearCreate} , page: {pages}
      </p>
      <hr />
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    yearCreate: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;

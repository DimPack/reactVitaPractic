import PropTypes from "prop-types";

const EventR = ({
  eventR: {
    title = "",
    description = "",
    date = "",
    time = "",
    location = "",
    category = "",
  },
}) => {
  return (
    <article>
        <hr />
      <h3>
        {title} category - {category}
      </h3>
      <p>{description}</p>
      <p>
        date: {date} time: {time}
      </p>
      <p>location:  {location}</p>
  
      <hr />
    </article>
  );
};

EventR.propTypes = {
  eventR: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string,
  }),
};

export default EventR;

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch({
      type: 'UPDATE_NAME',
      name
    })
  }
}

class Avatar extends React.Component {
  state = {
    photo: 'http://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-300x300.png'
  };

  componentDidMount() {
    fetch('https://reqres.in/api/users/10')
      .then(response => response.json())
      .then(response => {
        const data = response.data;
        this.setState({
          photo: data.avatar
        });

        this.props.updateName(`${data.first_name} ${data.last_name}`);
      })
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`  
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Get_pos_dep = () => {
  fetch("http://localhost:1001/api/dep_pos/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export default Get_pos_dep;

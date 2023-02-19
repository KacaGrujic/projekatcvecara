import React from 'react'

//arrangement je u stvari order u bazi

const Arrangement = ({a}) => {
  return (
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{a.title}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
  )
}

export default Arrangement
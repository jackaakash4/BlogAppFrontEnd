import React from 'react'

interface Category{
    name: string;
    path: string;
    bgcolor: string;
}

function CategoryCard(data: Category) {
    const {name, path, bgcolor} = data;
  return (
    <div style={{
        width: '300px',
        height: '200px',
        background: bgcolor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
            <p style={{
                color: 'white',
                fontSize: '15px'
            }}>
                {name}
            </p>
    </div>
  )
}

export default CategoryCard
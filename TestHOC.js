const increment = WrappedComponent => { 
     const MyComponent = props => {
         const modifiedA = props.a+1
         const modifiedA = props.b+1
    return (
          <WrappedComponent a={modifiedA} b={modifiedB} {...props} />
     );
   }
  return MyComponent;
 }

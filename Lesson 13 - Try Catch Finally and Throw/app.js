'use strict'

// Error handling
// try - catch
try
{
    alert("Akcja nr 1");
    dgifdjgjiodefefko;
    alert("Akcja nr 2");
}
catch(err)
{
	console.log(typeof(err));
	console.error(`Error name: ${err.name}   `);
	console.error(`Error name: ${err.stack}   `);
	console.error(`Error name: ${err.message}   `);
}



// try catch finally
try
{
    alert("Akcja try nr 1");
    dgifdjgjiodefefko();
    alert("Akcja try nr 2");
}
catch(err)
{
    alert("Akcja catch nr 1");
   console.error(`Error name: ${err.name}   `);
    console.error(`Error name: ${err.stack}   `);
    console.error(`Error name: ${err.message}   `);
}finally{
    alert("Akcja finally nr 1");
}



// try finally
try
{
    alert("Akcja try nr 1");
    dgifdjgjiodefefko();
    alert("Akcja try nr 2");
}
finally{
    alert("Akcja finally nr 1");
}



// try - thow an exception - catch
try
{
    console.info("Info example 1");
    throw new Error("Custom error.");
    console.info("Info example 2");
}
catch(err)
{
    console.error(`Error name: ${err.message}`);
}



// throw an expception with no handling
alert("Akcja 1");
throw new Error("Custom error message");
alert("Akcja 2")



export default function handler() {
  return <div>Redirection - Does not render</div>;
}

export async function getServerSideProps({ params }) {
  const { shortId } = params;

  // Buscamos la url en el server
  let data;

  // Si no encontramos nada, redireccionamos a root
  if (!data) {
    return {
      redirect: { destination: '/' },
    };
  }

  // En cualquier otro caso, el link redirecccionará a la url proporcionada
  return {
    redirect: { destination: data.url },
  };
}

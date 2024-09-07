function Footer() {
  return (
    <footer className=" text-center bottom-0 max-w-screen-lg w-full py-4 backdrop-blur-lg dark:bg-black  bg-white dark:text-white text-black">
      <p className="text-balance">
        Correo:{' '}
        <a href="mailto:ksdjvf@gmail.com" className="text-black dark:text-white">
          ksdjvf@gmail.com{' '}
        </a>{' '}
        | Telefono:
        <a href="tel:313-706-7056" className="text-black dark:text-white">
          313-706-7056
        </a>
      </p>
    </footer>
  )
}

export default Footer

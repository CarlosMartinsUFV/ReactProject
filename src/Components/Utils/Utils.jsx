const construir = () => {
  console.log(cnpj);
  if (cnpj.length >= 10) {
    setcnpj(
      cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
    );
    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/g,
      "$1.$2.$3/$4-$5"
    );
  } else return;
};

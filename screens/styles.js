import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#6200ee', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  centralizarText: {
      width: '70%',
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20,
  },
});


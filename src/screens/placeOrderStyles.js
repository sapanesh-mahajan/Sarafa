import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    height: 150,
    width: 150,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    color: '#000000',
  },
  // header
  header_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // UploadImage
  contain: {
    alignItems: 'center',
    margin: 10,
  },
  // jewelryPicker
  jewelryPicker: {
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 5,
    color: '#000000',
  },
  // Description & voiceButton
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 22,
    borderRadius: 5,
    color: '#000000',
  },
  voiceButton: {
    marginLeft: 10,
    fontSize: 24,
    borderWidth: 1,
    padding: 3.5,
    borderRadius: 5,
    color: '#000000',
  },
  voiceButtonText: {
    fontSize: 24,
    margin: 5,
    color: '#000000',
    marginHorizontal: 8,
  },
  // Tunch
  tunchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    marginVertical: 15,
    borderRadius: 5,
    color: '#000000',
  },
  tunchView1: {
    fontSize: 22,
    marginLeft: 10,
    color: '#000000',
  },
  tunchView2: {
    borderWidth: 1,
    margin: 5,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    color: '#000000',
  },
  tunchView3: {
    fontSize: 22,
    margin: 10,
    color: '#000000',
  },
  tunchView4: {
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  tunchView5: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
    color: '#000000',
  },
  // weight & Size
  wsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: {
    height: 45,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    width: 70,
    fontSize: 18,
    borderRadius: 5,
    color: '#000000',
  },
  // Switch
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-around',
  },
  // Submit button
  sbContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#454545',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    width: 130,
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

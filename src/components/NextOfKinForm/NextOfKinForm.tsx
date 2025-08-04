import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';

export type NextOfKinData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: NextOfKinData) => void;
};

const relationshipOptions = [
  'SIBLING',
  'SPOUSE',
  'PARENT',
  'CHILD',
  'RELATIVE',
  'LAWYER',
  'FRIEND',
];

const NextOfKinForm: React.FC<Props> = ({visible, onClose, onSubmit}) => {
  const [form, setForm] = useState<NextOfKinData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    relationship: 'SIBLING',
  });

  const handleChange = (field: keyof NextOfKinData, value: string) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = () => {
    onSubmit(form); // 👈 Submit to parent (screen)
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: "You've successfully added next of kin 👋",
      position: 'top',
      visibilityTime: 7000,
    });

    // Reset form
    setForm({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      relationship: 'SIBLING',
    });

    // Close modal
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Edit details</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>First name</Text>
              <TextInput
                value={form.firstName}
                onChangeText={text => handleChange('firstName', text)}
                style={styles.input}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Last name</Text>
              <TextInput
                value={form.lastName}
                onChangeText={text => handleChange('lastName', text)}
                style={styles.input}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Phone number</Text>
              <TextInput
                value={form.phoneNumber}
                onChangeText={text => handleChange('phoneNumber', text)}
                style={styles.input}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={form.email}
                onChangeText={text => handleChange('email', text)}
                style={styles.input}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Relationship</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={form.relationship}
                  onValueChange={value => handleChange('relationship', value)}
                  style={styles.picker}>
                  {relationshipOptions.map(option => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSubmit}>
                <Text style={styles.saveText}>Add</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default NextOfKinForm;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: '85%',
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  picker: {
    height: 53,
    width: '100%',
    color: '#333',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  cancelButton: {
    borderWidth: 1.5,
    borderColor: '#2ecc71',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  cancelText: {
    color: '#2ecc71',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  saveText: {
    color: 'white',
    fontWeight: '600',
  },
});

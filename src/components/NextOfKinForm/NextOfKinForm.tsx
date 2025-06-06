import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//import {Ionicons} from 'react-native-vector-icons/Ionicons';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: NextOfKinData) => void;
};

export type NextOfKinData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  relationship: string;
};

const relationshipOptions = [
  'Sibling',
  'Spouse',
  'Parent',
  'Child',
  'Relative',
  'Lawyer',
  'Friend',
];

const NextOfKinForm: React.FC<Props> = ({visible, onClose, onSubmit}) => {
  const [form, setForm] = useState<NextOfKinData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    relationship: 'Sibling',
  });

  const handleChange = (field: keyof NextOfKinData, value: string) => {
    setForm({...form, [field]: value});
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.header}>
              {/* <Ionicons name="create-outline" size={40} color="#333" /> */}
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
                value={form.phone}
                onChangeText={text => handleChange('phone', text)}
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
                <Text style={styles.saveText}>Save changes</Text>
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
    backgroundColor: '#2ecc71', // Replace with '#008069' to enable
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },

  saveText: {
    color: 'white',
    fontWeight: '600',
  },
});

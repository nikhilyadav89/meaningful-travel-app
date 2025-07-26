import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Mobile app enthusiast and tech lover. Always exploring new technologies and building amazing apps.',
    location: 'San Francisco, CA',
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile({ ...editedProfile });
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const ProfileField = ({ label, value, field, multiline = false }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {isEditing ? (
        <TextInput
          style={[styles.fieldInput, multiline && styles.multilineInput]}
          value={editedProfile[field]}
          onChangeText={(text) =>
            setEditedProfile({ ...editedProfile, [field]: text })
          }
          multiline={multiline}
          numberOfLines={multiline ? 3 : 1}
        />
      ) : (
        <Text style={styles.fieldValue}>{value}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {profile.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </Text>
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>Edit Photo</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{profile.name}</Text>
            <Text style={styles.emailText}>{profile.email}</Text>
          </View>
        </View>

        {/* Profile Information */}
        <View style={styles.infoContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Profile Information</Text>
            {!isEditing ? (
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.editActions}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancel}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSave}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.fieldsContainer}>
            <ProfileField
              label="Full Name"
              value={profile.name}
              field="name"
            />
            <ProfileField
              label="Email"
              value={profile.email}
              field="email"
            />
            <ProfileField
              label="Phone"
              value={profile.phone}
              field="phone"
            />
            <ProfileField
              label="Location"
              value={profile.location}
              field="location"
            />
            <ProfileField
              label="Bio"
              value={profile.bio}
              field="bio"
              multiline={true}
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>🔔</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Notifications</Text>
                <Text style={styles.actionSubtitle}>Manage your notification preferences</Text>
              </View>
              <Text style={styles.actionArrow}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>🔒</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Privacy & Security</Text>
                <Text style={styles.actionSubtitle}>Update your privacy settings</Text>
              </View>
              <Text style={styles.actionArrow}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>📊</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Activity Data</Text>
                <Text style={styles.actionSubtitle}>View your app usage statistics</Text>
              </View>
              <Text style={styles.actionArrow}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionItem}
            onPress={() => navigation.navigate('Settings')}
          >
            <View style={styles.actionContent}>
              <Text style={styles.actionIcon}>⚙️</Text>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Settings</Text>
                <Text style={styles.actionSubtitle}>App preferences and configuration</Text>
              </View>
              <Text style={styles.actionArrow}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  editAvatarButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  editAvatarText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
  nameContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 16,
    color: '#64748b',
  },
  infoContainer: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#6366f1',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  editActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64748b',
  },
  cancelButtonText: {
    color: '#64748b',
    fontWeight: '600',
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#10b981',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  fieldsContainer: {
    gap: 16,
  },
  fieldContainer: {
    marginBottom: 4,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  fieldValue: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
  fieldInput: {
    fontSize: 16,
    color: '#1e293b',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  actionsContainer: {
    margin: 20,
  },
  actionItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  actionArrow: {
    fontSize: 20,
    color: '#cbd5e1',
    fontWeight: 'bold',
  },
});
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    locationServices: true,
    autoSync: true,
    biometricAuth: false,
    analytics: true,
    marketing: false,
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Success', 'You have been logged out successfully!');
          },
        },
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert(
      'Clear Cache',
      'This will clear all cached data. Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Success', 'Cache cleared successfully!');
          },
        },
      ]
    );
  };

  const SettingItem = ({ icon, title, subtitle, hasToggle = false, toggleValue, onToggle, onPress, isDestructive = false }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={hasToggle ? null : onPress}
      disabled={hasToggle}
    >
      <View style={styles.settingContent}>
        <Text style={styles.settingIcon}>{icon}</Text>
        <View style={styles.settingTextContainer}>
          <Text style={[styles.settingTitle, isDestructive && styles.destructiveText]}>
            {title}
          </Text>
          {subtitle && (
            <Text style={styles.settingSubtitle}>{subtitle}</Text>
          )}
        </View>
        {hasToggle ? (
          <Switch
            value={toggleValue}
            onValueChange={onToggle}
            trackColor={{ false: '#d1d5db', true: '#6366f1' }}
            thumbColor={toggleValue ? '#ffffff' : '#f3f4f6'}
          />
        ) : (
          <Text style={styles.settingArrow}>›</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* General Settings */}
        <View style={styles.section}>
          <SectionHeader title="General" />
          
          <SettingItem
            icon="🔔"
            title="Notifications"
            subtitle="Receive push notifications"
            hasToggle={true}
            toggleValue={settings.notifications}
            onToggle={() => handleToggle('notifications')}
          />
          
          <SettingItem
            icon="🌙"
            title="Dark Mode"
            subtitle="Use dark theme"
            hasToggle={true}
            toggleValue={settings.darkMode}
            onToggle={() => handleToggle('darkMode')}
          />
          
          <SettingItem
            icon="📍"
            title="Location Services"
            subtitle="Allow location access"
            hasToggle={true}
            toggleValue={settings.locationServices}
            onToggle={() => handleToggle('locationServices')}
          />
        </View>

        {/* Privacy & Security */}
        <View style={styles.section}>
          <SectionHeader title="Privacy & Security" />
          
          <SettingItem
            icon="🔒"
            title="Biometric Authentication"
            subtitle="Use fingerprint or face recognition"
            hasToggle={true}
            toggleValue={settings.biometricAuth}
            onToggle={() => handleToggle('biometricAuth')}
          />
          
          <SettingItem
            icon="🛡️"
            title="Privacy Policy"
            subtitle="View our privacy policy"
            onPress={() => Alert.alert('Privacy Policy', 'Privacy policy would open here.')}
          />
          
          <SettingItem
            icon="📜"
            title="Terms of Service"
            subtitle="Read terms and conditions"
            onPress={() => Alert.alert('Terms of Service', 'Terms of service would open here.')}
          />
        </View>

        {/* Data & Sync */}
        <View style={styles.section}>
          <SectionHeader title="Data & Sync" />
          
          <SettingItem
            icon="🔄"
            title="Auto Sync"
            subtitle="Automatically sync data"
            hasToggle={true}
            toggleValue={settings.autoSync}
            onToggle={() => handleToggle('autoSync')}
          />
          
          <SettingItem
            icon="📊"
            title="Analytics"
            subtitle="Help improve the app"
            hasToggle={true}
            toggleValue={settings.analytics}
            onToggle={() => handleToggle('analytics')}
          />
          
          <SettingItem
            icon="📧"
            title="Marketing Communications"
            subtitle="Receive promotional emails"
            hasToggle={true}
            toggleValue={settings.marketing}
            onToggle={() => handleToggle('marketing')}
          />
        </View>

        {/* Account Management */}
        <View style={styles.section}>
          <SectionHeader title="Account" />
          
          <SettingItem
            icon="👤"
            title="Edit Profile"
            subtitle="Update your profile information"
            onPress={() => navigation.navigate('Profile')}
          />
          
          <SettingItem
            icon="🔑"
            title="Change Password"
            subtitle="Update your password"
            onPress={() => Alert.alert('Change Password', 'Password change screen would open here.')}
          />
          
          <SettingItem
            icon="🗑️"
            title="Clear Cache"
            subtitle="Free up storage space"
            onPress={handleClearCache}
          />
        </View>

        {/* Support */}
        <View style={styles.section}>
          <SectionHeader title="Support" />
          
          <SettingItem
            icon="❓"
            title="Help & Support"
            subtitle="Get help and contact support"
            onPress={() => Alert.alert('Help & Support', 'Help center would open here.')}
          />
          
          <SettingItem
            icon="📝"
            title="Send Feedback"
            subtitle="Share your thoughts"
            onPress={() => Alert.alert('Feedback', 'Feedback form would open here.')}
          />
          
          <SettingItem
            icon="⭐"
            title="Rate App"
            subtitle="Rate us on the app store"
            onPress={() => Alert.alert('Rate App', 'App store rating would open here.')}
          />
        </View>

        {/* App Info */}
        <View style={styles.section}>
          <SectionHeader title="About" />
          
          <SettingItem
            icon="ℹ️"
            title="App Version"
            subtitle="1.0.0 (Build 1)"
          />
          
          <SettingItem
            icon="🏢"
            title="About Us"
            subtitle="Learn more about our company"
            onPress={() => Alert.alert('About Us', 'Company information would be shown here.')}
          />
        </View>

        {/* Logout */}
        <View style={styles.section}>
          <SettingItem
            icon="🚪"
            title="Logout"
            subtitle="Sign out of your account"
            onPress={handleLogout}
            isDestructive={true}
          />
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
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
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 30,
    textAlign: 'center',
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  settingArrow: {
    fontSize: 20,
    color: '#cbd5e1',
    fontWeight: 'bold',
  },
  destructiveText: {
    color: '#ef4444',
  },
  bottomSpacing: {
    height: 30,
  },
});
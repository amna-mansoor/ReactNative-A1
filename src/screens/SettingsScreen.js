import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Reusable Settings Row Component
  const SettingRow = ({ icon, title, type, value, onToggle, onPress }) => (
    <TouchableOpacity 
      style={styles.settingRow} 
      activeOpacity={type === 'link' ? 0.7 : 1}
      onPress={type === 'link' ? onPress : null}
    >
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={20} color="#2b6cb0" />
        </View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      
      {type === 'toggle' && (
        <Switch
          trackColor={{ false: '#cbd5e0', true: '#90cdf4' }}
          thumbColor={value ? '#2b6cb0' : '#f7fafc'}
          onValueChange={onToggle}
          value={value}
        />
      )}
      {type === 'link' && <Ionicons name="chevron-forward" size={20} color="#a0aec0" />}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Amna Mansoor</Text>
        <Text style={styles.profileRole}>Admin • Karachi, Pakistan</Text>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        <View style={styles.card}>
          <SettingRow 
            icon="notifications" 
            title="Push Notifications" 
            type="toggle" 
            value={notifications} 
            onToggle={() => setNotifications(!notifications)} 
          />
          <View style={styles.divider} />
          <SettingRow 
            icon="moon" 
            title="Dark Mode" 
            type="toggle" 
            value={darkMode} 
            onToggle={() => setDarkMode(!darkMode)} 
          />
          <View style={styles.divider} />
          <SettingRow 
            icon="cash-outline" 
            title="Currency Default" 
            type="link" 
            onPress={() => alert("Currency settings coming soon!")} 
          />
        </View>
      </View>

      {/* App Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>App Information</Text>
        <View style={styles.card}>
          <SettingRow 
            icon="information-circle" 
            title="About Car Manager" 
            type="link" 
            onPress={() => alert("Car Sales Manager v1.0\nDeveloped with React Native")} 
          />
          <View style={styles.divider} />
          <SettingRow 
            icon="shield-checkmark" 
            title="Privacy Policy" 
            type="link" 
            onPress={() => alert("Privacy Policy coming soon!")} 
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a202c',
  },
  profileRole: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#718096',
    textTransform: 'uppercase',
    marginBottom: 10,
    paddingLeft: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#ebf4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: '#2d3748',
  },
  divider: {
    height: 1,
    backgroundColor: '#edf2f7',
    marginLeft: 62, 
  },
  logoutButton: {
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fc8181',
  },
  logoutText: {
    color: '#e53e3e',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
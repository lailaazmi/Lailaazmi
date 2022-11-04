ARCHS = arm64 arm64e
TARGET = iphone:clang:11.2:11.0
include $(THEOS)/makefiles/common.mk

BUNDLE_NAME = MenuStyle
MenuStyle_FILES = Preference.m
MenuStyle_CLAGS = -fobjc-arc
MenuStyle_INSTALL_PATH = /Library/PreferenceBundles
MenuStyle_FRAMEWORKS = UIKit
MenuStyle_PRIVATE_FRAMEWORKS = Preferences

include $(THEOS_MAKE_PATH)/bundle.mk

internal-stage::
	$(ECHO_NOTHING)mkdir -p $(THEOS_STAGING_DIR)/Library/PreferenceLoader/Preferences$(ECHO_END)
	$(ECHO_NOTHING)cp entry.plist $(THEOS_STAGING_DIR)/Library/PreferenceLoader/Preferences/MenuStyle.plist$(ECHO_END)

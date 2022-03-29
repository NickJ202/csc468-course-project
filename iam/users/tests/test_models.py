from django.contrib.auth import get_user_model
from ..models import User, Organization, Event
from django.test import TestCase


class UsersManagersTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(email='normal@user.com', password='foo', first_name='John', last_name='Smith', phone='012-345-6789')
        self.assertEqual(user.email, 'normal@user.com')
        self.assertEqual(user.first_name, 'John')
        self.assertEqual(user.last_name, 'Smith')
        self.assertEqual(user.phone, '012-345-6789')
        self.assertFalse(user.is_active)
        self.assertFalse(user.is_organizer)
        self.assertFalse(user.is_attendee)
        self.assertFalse(user.is_superuser)
        # try:
        #     # username is None for the AbstractUser option
        #     # username does not exist for the AbstractBaseUser option
        #     self.assertIsNone(user.username)
        # except AttributeError:
        #     pass
        # with self.assertRaises(TypeError):
        #     User.objects.create_user()
        # with self.assertRaises(TypeError):
        #     User.objects.create_user(email='')
        # with self.assertRaises(ValueError):
        #     User.objects.create_user(email='', password="foo")

    def test_create_superuser(self):
        admin_user = User.objects.create_superuser(email='super@user.com', password='foo', first_name='John', last_name='Smith', phone='012-345-6789')
        self.assertEqual(admin_user.email, 'super@user.com')
        self.assertEqual(admin_user.first_name, 'John')
        self.assertEqual(admin_user.last_name, 'Smith')
        self.assertEqual(admin_user.phone, '012-345-6789')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        self.assertTrue(admin_user.is_organizer)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email='super@user.com', password='foo', is_superuser=False)

class OrganizationTestCase(TestCase):
    def test_string_representation(self):
        """ 
        This test on the Organization model checks the string representation of Organization. A "user" object is declared but not used as every Event requires one User relation. 
        """
        user = User.objects.create_user(email='normal@user.com', password='foo', first_name='John', last_name='Smith', phone='012-345-6789')
        org = Organization.objects.create(address_1='123 Marshall Ln', address_2='Apt 2', postal_code='99999', locality='West Chester', state='PA', name='CS Club', phone='012-345-6789')
        event = Event.objects.create( 
            name="Test Event", date="2021-08-20", startTime="0:0:59", endTime="1:30:59", tag="Test tag", description="This is a test.", organizer=org)
        self.assertEqual(str(event), event.name)
        self.assertEqual("2021-08-20", event.date)
        self.assertEqual("0:0:59", event.startTime)
        self.assertEqual("1:30:59", event.endTime)
        self.assertEqual("Test tag", event.tag)
        self.assertEqual("This is a test.", event.description)
    
    def test_members_relation(self):
        """ 
        This test on the Event model checks the ForeignKey relation of User and Event.user.
        """
        user1 = User.objects.create(email="testuser1@gmail.com", password="testpassword123")
        user2 = User.objects.create(email="testuser2@gmail.com", password="testpassword1234")
        user3 = User.objects.create(email="testuser3@gmail.com", password="testpassword12345")
        org = Organization.objects.create(address_1='123 Marshall Ln', address_2='Apt 2', postal_code='99999', locality='West Chester', state='PA', name='CS Club', phone='012-345-6789')
        org.members.add(user1)
        org.members.add(user2)
        org.members.add(user3)

        self.assertEqual(user1.id, org.members.get(id=user1.id).id)
        self.assertEqual(str(user1), org.members.get(id=user1.id).email)
        self.assertEqual("testuser1@gmail.com", org.members.get(id=user1.id).email)
        self.assertEqual("testpassword123", org.members.get(id=user1.id).password)

        self.assertEqual(user2.id, org.members.get(id=user2.id).id)
        self.assertEqual(str(user2), org.members.get(id=user2.id).email)
        self.assertEqual("testuser2@gmail.com", org.members.get(id=user2.id).email)
        self.assertEqual("testpassword1234", org.members.get(id=user2.id).password)

        self.assertEqual(user3.id, org.members.get(id=user3.id).id)
        self.assertEqual(str(user3), org.members.get(id=user3.id).email)
        self.assertEqual("testuser3@gmail.com", org.members.get(id=user3.id).email)
        self.assertEqual("testpassword12345", org.members.get(id=user3.id).password)

class EventTestCase(TestCase):
    def test_string_representation(self):
        """ 
        This test on the Event model checks the string representation of Event. A "user" object is declared but not used as every Event requires one User relation. 
        """
        user = User.objects.create_user(email='normal@user.com', password='foo', first_name='John', last_name='Smith', phone='012-345-6789')
        org = Organization.objects.create(address_1='123 Marshall Ln', address_2='Apt 2', postal_code='99999', locality='West Chester', state='PA', name='CS Club', phone='012-345-6789')
        event = Event.objects.create( 
            name="Test Event", date="2021-08-20", startTime="0:0:59", endTime="1:30:59", tag="Test tag", description="This is a test.", organizer=org)

        self.assertEqual(str(event), event.name)
        self.assertEqual("2021-08-20", event.date)
        self.assertEqual("0:0:59", event.startTime)
        self.assertEqual("1:30:59", event.endTime)
        self.assertEqual("Test tag", event.tag)
        self.assertEqual("This is a test.", event.description)

    def test_org_relation(self):
        """ 
        This test on the Event model checks the ForeignKey relation of User and Event.user.
        """
        user = User.objects.create_user(email='normal@user.com', password='foo', first_name='John', last_name='Smith', phone='012-345-6789')
        org = Organization.objects.create(address_1='123 Marshall Ln', address_2='Apt 2', postal_code='99999', locality='West Chester', state='PA', name='CS Club', phone='012-345-6789')
        event = Event.objects.create(
            name="Test Event", date="2021-08-20", startTime="0:0:59", endTime="1:30:59", tag="Test tag", organizer=org)

        self.assertEquals(org.id, event.organizer.id)
        self.assertEqual(org.name, event.organizer.name)
    
    def test_attendees_relation(self):
        """ 
        This test on the Event model checks the ManyToMany relation of User and Event.attendees.
        """
        user1 = User.objects.create(email="testuser1@gmail.com", password="testpassword123")
        user2 = User.objects.create(email="testuser2@gmail.com", password="testpassword1234")
        user3 = User.objects.create(email="testuser3@gmail.com", password="testpassword12345")
        org = Organization.objects.create(address_1='123 Marshall Ln', address_2='Apt 2', postal_code='99999', locality='West Chester', state='PA', name='CS Club', phone='012-345-6789')
        event = Event.objects.create(
            name="Test Event", date="2021-08-20", startTime="0:0:59", endTime="1:30:59", tag="Test tag", organizer=org)
        event.attendees.add(user1)
        event.attendees.add(user2)
        event.attendees.add(user3)

        self.assertEqual(user1.id, event.attendees.get(id=user1.id).id)
        self.assertEqual(str(user1), event.attendees.get(id=user1.id).email)
        self.assertEqual("testuser1@gmail.com", event.attendees.get(id=user1.id).email)
        self.assertEqual("testpassword123", event.attendees.get(id=user1.id).password)

        self.assertEqual(user2.id, event.attendees.get(id=user2.id).id)
        self.assertEqual(str(user2), event.attendees.get(id=user2.id).email)
        self.assertEqual("testuser2@gmail.com", event.attendees.get(id=user2.id).email)
        self.assertEqual("testpassword1234", event.attendees.get(id=user2.id).password)

        self.assertEqual(user3.id, event.attendees.get(id=user3.id).id)
        self.assertEqual(str(user3), event.attendees.get(id=user3.id).email)
        self.assertEqual("testuser3@gmail.com", event.attendees.get(id=user3.id).email)
        self.assertEqual("testpassword12345", event.attendees.get(id=user3.id).password)